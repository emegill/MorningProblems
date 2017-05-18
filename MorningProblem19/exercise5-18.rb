require 'minitest/autorun'
require 'minitest/pride'

# Write two methods:
#
#   * 'first_name': given a name in string, return the first name.
#   * 'last_name': given a name in string, return the last name.

# WRITE YOUR CODE HERE.

# def first_name(name)
#   split = name.split(' ')
#   len = split.length
#   if len > 1
#     return split[0, len - 1].join(' ')
#   elsif len == 1
#     return split[0]
#   else
#     return ''
#   end
# end

# def last_name(name)
#   split = name.split(' ')
#   split.length > 1 ? split[-1] : ''
# end

def first_name(name)
  return name if name == ""
  name = name.split
  name.pop if name.length > 1
  name.join(" ")
end

def last_name(name)
  return "" if name == "" || name.split.length == 1
  name.split[-1]
end




class StringSplitChallenge < MiniTest::Test
  def test_first_name
    assert_equal "Chris", first_name("Chris Foster")
  end

  def test_last_name
    assert_equal "Foster", last_name("Chris Foster")
  end

  def test_one_word_name
    assert_equal "deadmou5", first_name("deadmou5")
    assert_equal "", last_name("deadmou5")
  end

  def test_three_word_name
    assert_equal "John Quincy", first_name("John Quincy Adams")
    assert_equal "Adams", last_name("John Quincy Adams")
  end

  def test_no_word_name
    assert_equal "", first_name("")
    assert_equal "", last_name("")
  end
end
