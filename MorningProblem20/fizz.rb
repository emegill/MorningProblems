require 'minitest/autorun'
require 'minitest/pride'

# Write a method which returns:
#
#   * "Fizz" if the number is divisible by 3
#   * "Buzz" if the number is divisible by 5
#   * "FizzBuzz" if the number is divisible by 3 and 5
#   * Otherwise, return the number itself
#

# WRITE YOUR CODE HERE.  Name your method `fizzbuzz`.

# def fizzbuzz(num)
#   if num % 15 == 0
#     return "FizzBuzz"
#   end
#   if num % 3 == 0
#     return "Fizz"
#   end
#   if num % 5 == 0
#     return "Buzz"
#   else return num
#   end
# end



# def fizzbuzz(number)
#   output=""
#   output << "fizz" if number % 3 == 0
#   output << "buzz" if number % 5 == 0
#   output = number if output == ""
#   output
# end


def fizzbuzz(num)
  str = ""

  str << "Fizz" if num % 3 == 0
  str << "Buzz" if num % 5 == 0

  str != "" ? str : num

end

# turnairy operator 
# if this condition is true ? run this code : else run this code


class IfChallenge < MiniTest::Test
  def test_one
    assert_equal 1, fizzbuzz(1)
  end

  def test_three
    assert_equal "Fizz", fizzbuzz(3)
  end

  def test_five
    assert_equal "Buzz", fizzbuzz(5)
  end

  def test_eight
    assert_equal 8, fizzbuzz(8)
  end

  def test_ten
    assert_equal "Buzz", fizzbuzz(10)
  end

  def test_fifteen
    assert_equal "FizzBuzz", fizzbuzz(15)
  end

  def test_twenty_three
    assert_equal 23, fizzbuzz(23)
  end

  def test_thirty
    assert_equal "FizzBuzz", fizzbuzz(30)
  end
end
