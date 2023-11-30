import re

test1 = input('Enter first alphanumeric data: ')
test2 = input('Enter second alphanumeric data: ')

numbers = re.findall(r'-?\b\d+(\.\d+)?\b', test1)
numbers1 = re.findall(r'-?\b\d+(\.\d+)?\b', test2)

concate_1 = ''.join(numbers)
concate_2 = ''.join(numbers1)
num1= int(concate_1)
num2= int(concate_2)
total= sum((num1,num2))
print(total)