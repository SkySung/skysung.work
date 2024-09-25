#!/bin/bash

# Function to display usage information
show_usage() {
    echo "Usage: ./script_name.sh [depth]"
    echo "  [depth]: Optional. The number of levels to recurse into. Default is 2 if not provided."
    echo "  [depth] must be a positive integer."
    echo
    echo "To revise the output file name, update the 'output_file' variable in the script."
    echo "To revise the ignored items, update the 'ignore_list' array in the script."
    echo "To revise the large directories that should not be fully traversed, update the 'large_dirs' array in the script."
    echo "'chmod +x structure.sh' to add authority to execute this shell script."
    echo
    echo "A file named structure.txt will be generated with the directory structure."
}

# Check if help is requested
if [ "$1" == "--help" ] || [ "$1" == "-h" ]; then
    show_usage
    exit 0
fi

script_name=$(basename "$0")
# Customize these variables as needed
default_depth=2
output_file="structure.txt"
ignore_list=("$script_name" "$output_file")
# Ignore the sub-dir in the large_dirs
large_dirs=("node_modules" "vendor" "build" "dist" "logs" "tmp" "cache" "__pycache__" "media" "uploads" "data" "datasets")

# Validate and set depth
if [ -z "$1" ]; then
    depth=$default_depth
elif [[ "$1" =~ ^[0-9]+$ ]]; then
    depth="$1"
else
    echo "Error: Invalid depth parameter. It must be a positive integer."
    show_usage
    exit 1
fi

# Function to check if a file or directory should be ignored
should_ignore() {
    local name="$1"
    for ignore_item in "${ignore_list[@]}"; do
        if [[ "$name" == "$ignore_item" ]]; then
            return 0
        fi
    done
    return 1
}

# Function to check if a directory is large and should not be fully traversed
is_large_dir() {
    local name="$1"
    for large_dir in "${large_dirs[@]}"; do
        if [[ "$name" == "$large_dir" ]]; then
            return 0
        fi
    done
    return 1
}

# Function to print structure
print_structure() {
    local prefix="$1"
    local path="$2"
    local level="$3"
    local current_level="$4"

    if [ "$current_level" -ge "$level" ]; then
        return
    fi

    local entries=("$path"/*)
    local dirs=()
    local files=()
    
    # Check if the directory exists and is empty
    if [ -d "$path" ] && [ ! "$(ls -A "$path")" ]; then
        echo "${prefix}└── (empty)"
        return
    fi

    # Separate directories and files
    for entry in "${entries[@]}"; do
        local name=$(basename "$entry")
        if should_ignore "$name"; then
            continue
        fi
        if [ -d "$entry" ]; then
            if is_large_dir "$name"; then
                echo "${prefix}├── $name/"
            else
                dirs+=("$entry")
            fi
        else
            files+=("$entry")
        fi
    done

    # Combine dirs and files for final traversal
    local combined=("${dirs[@]}" "${files[@]}")
    local count=${#combined[@]}
    local i=0

    for entry in "${combined[@]}"; do
        i=$((i + 1))
        local name=$(basename "$entry")
        local new_prefix="$prefix"

        if [ -d "$entry" ]; then
        name="$name/"  # Append / if it's a directory
        fi

        if [ "$i" -eq "$count" ]; then
            # Last entry in this directory level
                echo "${prefix}└── $name"
            new_prefix="${prefix}    "
        else
            echo "${prefix}├── $name"
            new_prefix="${prefix}│   "
        fi

        if [ -d "$entry" ]; then
            print_structure "$new_prefix" "$entry" "$level" "$((current_level + 1))"
        fi
    done

}


# Get the current directory name
current_dir=$(basename "$PWD")

# Inform the user about the output file
echo "Generating directory structure of '$current_dir' and saving it to '$output_file'."
echo "Using '$script_name -h' for help."

# Redirect output to a file
{
    echo "$current_dir/"
    print_structure "" "." "$depth" 0
} > "$output_file"
