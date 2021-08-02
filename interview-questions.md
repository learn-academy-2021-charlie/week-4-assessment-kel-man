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
  An instance variable is used in OOP to give objects their own space to store data. If an object is a data structure that can both do things and know things, then
  instance variables represent the "know" portion of this description, while methods are the "do." Instance variables describe the attributes of any given class. Instance
  variables are encapsulated within a class, and cannot be accessed from outside it. This can be worked around using the `attr_reader`, `attr_accessor` methods. By default an
  instance variable will return nil. They don't always have to be declared in the initialize method, but if you want them to have initial value then they must be created there.


2. What is a block in Ruby?

  Your answer:
  In the context of our course, Ruby blocks are essentially loops. Whenever iteration occurs, the ensuing code is a block. There are many more ways to implement iteration in Ruby than in
  Javascript, and they are quite versatile.

  Researched answer:
  Blocks in Ruby are simply code blocks. With the do/end keywords, one can enclose groups of code/logic in a single block and have it all invoked as an individual piece of code. This is
  useful in creating methods, iterating over data, etc. Ruby blocks are not executed at the time they are read. Rather, Ruby remembers the context in which the block is created and then
  enters the method. The keywords are not necessary for a single line of code; instead, they can be omitted and replaced with { curly braces }. Blocks can be created with parameters or
  without, and any block in Ruby is what would be considered a higher-order block in Javascript, in that they can accept methods as arguments.



3. Ruby has an implicit return. What does that mean?

  Your answer:
  It is not necessary to use the `return` keyword in Ruby. The last line of code that executes will return its output if the `return` keyword is omitted.

  Researched answer:
  Implicit return is the term given to a Ruby behavior that returns the value of the last line of code in a block automatically. Using the return keyword is fine, and usually will not
  cause troublesome behavior, but it is rarely necessary to use it in well organized code. Exceptions include when using conditionals to decide what comes out of a method call, in which
  case a return would be helpful, and when using return inside Procs, which causes an exception.



4. What is object-oriented programming? How is it different than functional programming?

  Your answer:
  In object oriented programming(hereon referred to as OOP), everything is an object. If a method exists, it is defined within an object. If a value exists, it belongs
  to an object. In Ruby this is made exceedingly straightforward, as it is already object oriented as a language. Every single thing in Ruby is an object. This is
  so extensive that if we wanted to, we could create a class that inherits from String and change the behavior of its methods.

  Researched answer:
  OOP is a programming paradigm that relies on classes and objects. C++ was one of the first OOP languages, and realistically was the one that popularized it. SIMULA 1 and
  Simula 67 are the two predecessors that were object oriented, but they were not very popular and are rarely used today. Another very popular language for OOP besides Ruby
  is Python, which boasts similar syntactical beauty but tends to be used differently, as its popularity mainly lies in data processing and intense algorithms. OOP models
  complex things as reusable and visually structured things. It benefits the creation of unique behavior through polymorphism, and paints a roadmap to debugging through
  encapsulation, which also makes it informationally secure. This code is also easier to maintain, as class inheritance in OOP is used heavily.



5. What is the difference between a class and an object?

  Your answer:
  A class is a blueprint. It in itself just describes behavior. You cannot call a method that belongs to a class. It doesn't have variable values, just describes them.
  An object is the realization of the behavior described in a class. You use a class to create an object, and the object can then be used to access its methods and
  values.

  Researched answer:
  A class is an abstract blueprint that is used to create objects, which are specific and concrete(i.e. they have state, and can exist in multiple instances). While classes
  describe a blueprint, objects can have unique values not explicitly defined in their parent class.



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
  A method born of multiple levels of syntactical sugar, the `attr_accessor` method represents both the `attr_reader` and `attr_writer` which are both built-in methods
  in Ruby classes. The reader represents the first method shown above, while the writer represents the second. However, why write out both of these methods every time
  when we can combine them? While there are some cases where, in order to make information security airtight, one might wish to specifically define the attributes for
  `attr_reader` differently than `attr_writer`, in most cases this is not necessary and using `attr_accessor` is quicker and more readable. All three methods require
  symbols as arguments.



## Looking Ahead: Terms for Next Week

1. PostgreSQL:
    A database structure, also known as Postgres, which is open source, free, and a modern paradigm of managing data. Competitors in open-source modern programming
    include MySQL, MariaDB, and more, but Postgres holds several advantages. One such advantage is that Postgres is object-relational. It supports user-defined objects
    and behaviors, allowing it to flexibly fill the requirements for many programming languages while not giving up power. However, it also supports many other data-types,
    including some I've never interacted with (monetary, bit string, xml, composite, etc.).

2. Ruby on Rails:
    Colloquially referred to as simply "rails,", Ruby on Rails is a powerful server-side web app framework written under the open source MIT license. It uses a
    model-view-controller structure, allowing it to create a full web application without leaving the framework. It boasts LOTS of built-in behavior and generators,
    commonly referred to as "rails magic," and allows for simple and syntactical creation of applications that are both robust and easily mutable. Already growing
    beforehand, its popularity skyrocketed when Apple added it as a default to the Mac OS X "Leopard" in 2006. It is extremely accessible to novice programmers, especially
    with the creation of the Ruby on Rails Guides written by Michael Hartl, available for free, and released for each version of Rails. Currently on its 6th major release,
    Rails continues to evolve and grow as the need for advanced methodology does.

3. CRUD:
    CRUD is an acronym for "create, read, update, and delete," which are the four basic operations of data storage. It is an essential paradigm to understand when interacting
    with databases, especially because most access points will have different keywords to represent each of these operations. In SQL servers they are INSERT, SELECT, UPDATE, and
    DELETE, respectively. However, in HTTP they are referred to as POST, GET, PUT, and DELETE. In this case, PUT actually represents the majority of "create" operations as well,
    with the exception of target-resource-specific semantics.

4. ORM:
    ORM stands for Object Relational Mapping and is a programming technique for converting data between different "type-systems" using OOP. ORM allows us to interact with the
    CRUD paradigm using languages or systems that do not recognize the CRUD keywords. In such cases, the user is also given more options depending on the system being used.

5. Active Record:
    Active Record is a class that is built into Ruby on Rails that makes up the basic structure of model creation and management. In Active Record, objects carry
    both data and behavior specific to said data. It is designed in part for the purpose of ensuring that users of the object know how to read from and write to the database,
    and protects the database from errant interactions. It utilizes ORM to connect rich objects from the app to tables in the database system. It allows developers to avoid
    writing SQL statements entirely in their codebase, and makes code more succinct and legible.
