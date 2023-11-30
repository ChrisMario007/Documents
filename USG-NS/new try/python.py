input1_element = []
input2_element = []
positive_numbers = []
another_numbers = []

skip = False
dot_count = 0

input1 = input("Enter the first string: ")
input2 = input("Enter the second string: ")

input1_element = list(input1)
input2_element = list(input2)

for item in input1_element:
    if skip:
        if not str(item).isdigit():
            skip = False
    elif item == '-':
        skip = True
    elif str(item).isdigit() or (item == '.' and dot_count == 0):
        if item == '.':
            dot_count += 1
        positive_numbers.append(item)

Firstnumber = ''.join(positive_numbers)
print("Positive numbers from the first input: " + Firstnumber)

skip = False
dot_count = 0
for item in input2_element:
    if skip:
        if not str(item).isdigit():
            skip = False
    elif item == '-':
        skip = True
    elif str(item).isdigit() or (item == '.' and dot_count == 0):
        if item == '.':
            dot_count += 1
        another_numbers.append(item)

Secondnumber = ''.join(another_numbers)
print("Positive numbers from the second input: " + Secondnumber)

try:
    Firstnumber = float(Firstnumber)
except ValueError:
    pass

try:
    Secondnumber = float(Secondnumber)
except ValueError:
    pass

SPsum = Firstnumber + Secondnumber

print("The result is: " + str(SPsum))
