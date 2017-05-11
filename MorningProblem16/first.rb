# Write a method that takes an array of numbers and creates a new array with only the even numbers from the first array.

# def even_numbers(array)
# 	newarray=[]
# 	array.each do |variable|
# 		newarray.push(variable) if variable % 2 == 0
# 	end
# 	newarray
# end
# my_array = [1,2,3,4,5,6,7,8,9,10,13,18,22,23]
# p even_numbers(my_array)

def even_numbers(num_array)

	num_array.select! do |num|
		num % 2 == 0
	end

	num_array

end
my_array = [1,2,3,4,5,6,7,8,9,10,13,18,22,23]
p even_numbers(my_array)


