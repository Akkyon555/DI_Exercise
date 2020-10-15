#Ex 1

#my_fav_numbers = {5, 25, 3, 7}
#my_fav_numbers.add(75)
#my_fav_numbers.add(69)
#my_fav_numbers.remove(3)
#friend_fav_numbers = {16, 18, 33}
#our_fav_numbers = my_fav_numbers|friend_fav_numbers
#print(our_fav_numbers)

#Ex 2

#Not Doable

# Ex 3

# FLoat represent decimal nb whereas int are whole nb

#import numpy as nb
#np.arange(0, 5, 0.5)
#numbers = range(0, 5, 2)
#for number in numbers:
#  print(number)

#Ex 4

#number = range(1, 21)
#for numbers in number:
#    print(numbers)

#Ex 5

# Ask user for toppings on his pizza, and add them to a list until he says "STOP"

#toppings=[]
#choice = input("What do you want on your pizza!? type STOP to stop")
#toppings.append(choice)
#while choice!= "STOP":
#    choice = input(f"I'll add {toppings} to your pizza what else do you want ?")
#    toppings.append(choice)

#print(toppings)

#Ex 6




#Ex 7

#smith_family = ["rick", "morty", "summer", "beth", "jerry"]

#for member in smith_family:
#    age=input(f"{member}, how old are you?")
#    age=int(age)
#    if age<16:
#        smith_family.remove(member)

#print(smith_family)

#Ex 8

#basket = ["Banana", "Apples", "Oranges", "Blueberries"]
#basket.remove("Banana")
#basket.remove("Blueberries")
#basket.append("kiwi")
#print(len(basket))
#basket.clear()
#print (basket)

#Ex 9

#hello = ["Ciao", "Bonjour", "Hi", "Shalom"]
#i = len(hello) -1
#while i >= 0:
#    print(hello[i])
#    i -= 1

#Ex 10

# list of numbers
#list1 = [10, 12, 4, 45, 6, 93]
#num = 0
# using while loop
#while (num < len(list1)):
#    # checking condition
#    if num % 2 == 0:
#        print(list1[num], end=" ")
#    # increment num
#    num += 1

#Ex 11

#l = [i for i in range(3, 31) if i % 3 == 0]
#print(l)

#Ex 12

#nl=[]
#for x in range(1500, 2701):
#    if (x%7==0) and (x%5==0):
#        nl.append(str(x))
#print (','.join(nl))