# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
# Looping through the array, I check if the current string includes the given substring
# if it does, I add it to my output array

def array_selector words, substring
  output = []
  words.each do |word|
    if word.include? substring
      output.push word
    end
  end
  output #It was returning the input before I added this line. I guess line 16 is what it considers to be the implicit return
end

p array_selector beverages_array, 'o'
p array_selector beverages_array, 't'

# Cool beans

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided.
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# As delete_if does not work on strings, I need to split my string first
# I'll create a dictionary of vowels in an array so I can check if the current letter is a vowel as I iterate over my array
# Then I return a joined string from the array

def remove_vowels string
  vowels = ['a', 'e', 'i', 'o', 'u']
  stringArray = string.split('')
  stringArray.delete_if{|letter| vowels.include? letter.downcase}
  stringArray.join('')
end

p remove_vowels album1
p remove_vowels album2
p remove_vowels album3

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2.
#                         The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

class Bike
  attr_accessor :wheels, :current_speed, :model

  def initialize model
    @wheels = 2
    @current_speed = 0
    @model = model
  end

  def get_info
    p "The #{model} bike has #{wheels} wheels and is moving at #{current_speed} mph"
  end
end

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
trek = Bike.new('Trek')
trek.get_info


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed.
#                        The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
#
# I'm just going to leave the first class up there as the code below will override it

class Bike
  attr_accessor :wheels, :current_speed, :model

  def initialize model
    @wheels = 2
    @current_speed = 0
    @model = model
  end

  def pedal_faster
    if @current_speed == 40
      p 'You are going as fast as you are able'
    end
    @current_speed += 10 unless @current_speed >= 40
  end

  def brake
    if @current_speed >= 15
      @current_speed -= 15
    else
      @current_speed = 0
      p 'You have stopped'
    end
  end

  def get_info
    p "The #{model} bike has #{wheels} wheels and is moving at #{current_speed} mph"
  end
end

raleigh = Bike.new('Raleigh')
raleigh.get_info
raleigh.pedal_faster
raleigh.get_info
raleigh.brake
raleigh.get_info
5.times do
  raleigh.pedal_faster
  raleigh.get_info
end
4.times do
  raleigh.brake
  raleigh.get_info
end
