import re

input1 = input("Enter the first string: ")
input2 = input("Enter the second string: ")

# Regular expression pattern to match positive and negative integers and floats
pattern = r'-?\d+(\.\d+)?'

# Extract positive and negative numbers from input strings using regex
positive_numbers_1 = [float(match) for match in re.findall(pattern, input1)]
positive_numbers_2 = [float(match) for match in re.findall(pattern, input2)]

# Calculate the sum of extracted numbers
sum_numbers = sum(positive_numbers_1 + positive_numbers_2)

print("Positive and negative numbers from the first input: ", positive_numbers_1)
print("Positive and negative numbers from the second input: ", positive_numbers_2)
print("The sum is: ", sum_numbers)
