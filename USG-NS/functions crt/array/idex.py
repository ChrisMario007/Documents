def sort_numbers():
    # Get input numbers from the user
    input_str = input("Enter numbers (comma-separated): ")
    
    # Convert input to a list of integers
    input_values = [int(x.strip()) for x in input_str.split(',')]

    # Sort the list in ascending order
    sorted_values = sorted(input_values)

    # Display the result
    print(f"Sorted Numbers (Ascending Order): {sorted_values}")

# Call the function to sort numbers
sort_numbers()
