# program to checks if you're old enough to drive
#you = 86

#get input as a string, we cast it to an int

raw_you = input('How old are you?')
you = int(raw_you)

min_age = 16

# if, elif, else

if you < min_age:
  print('you\'re too young') 

elif you == min_age:
  print('congrats')
#else doesn't check a condition, everything else is true
else:
  print('you old!!!')
  
x = 2 ** (1 / 2.0)
y = 1 + (1 / 3.0)
x_diff = 0
y_diff = 0

if x == y:
    print(x)

elif x > y:
    x_diff = x - y
    print(x_diff)

else y > x:
    y_diff = y - x


