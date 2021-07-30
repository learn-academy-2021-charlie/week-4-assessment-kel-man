# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer:
  Instance variables are referenced with the @ character and are the equivalent of this.variable in a Javascript class. It must be included in the
  `attr_accessor` to be accessed, and it can be given an initial value in the initialize. Instance variables belong to an object. Other variables are typically
  defined and used in a method or function, while instance variables belong to specific instances of a class(or object).

  Researched answer:



2. What is a block in Ruby?

  Your answer:
  In Ruby, blocks are essentially loops. Whenever iteration occurs, the ensuing code is a block. There are many more ways to implement iteration in Ruby than in
  Javascript, and they are quite versatile.

  Researched answer:



3. Ruby has an implicit return. What does that mean?

  Your answer:
  It is not necessary to use the `return` keyword in Ruby. The last line of code that executes will return its output if the `return` keyword is omitted.

  Researched answer:



4. What is object-oriented programming? How is it different than functional programming?

  Your answer:
  In object oriented programming(hereon referred to as OOP), everything is an object. If a method exists, it is defined within an object. If a value exists, it belongs
  to an object. In Ruby this is made exceedingly straightforward, as it is already object oriented as a language. Every single thing in Ruby is an object. This is
  so extensive that if we wanted to, we could create a class that inherits from String and change the behavior of its methods.

  Researched answer:



5. What is the difference between a class and an object?

  Your answer:
  A class is a blueprint. It in itself just describes behavior. You cannot call a method that belongs to a class. It doesn't have variable values, just describes them.
  An object is the realization of the behavior described in a class. You use a class to create an object, and the object can then be used to access its methods and
  values.

  Researched answer:



6. STRETCH: What is `attr_accessor`?

  Your answer:
  `attr_accessor` is a built in method in Ruby classes that creates the basic behavior methods for the instance variables of that class.
  A couple days ago I paired with my older brother Liam and refactored our rock-paper-scissors game to be OOP. He explained it thusly:
      ` # attr_accessor is shorthand for defining these methods
        # def num_players
        #   self.num_players
        # end
        # def num_players= value
        #   self.num_players value
        # end
        attr_accessor :players`

  Researched answer:



## Looking Ahead: Terms for Next Week

1. PostgreSQL:

2. Ruby on Rails:

3. CRUD:

4. ORM:

5. Active Record:
