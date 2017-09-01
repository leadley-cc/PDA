### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val
  if val = 1 # Setting val to 1 instead of comparing
  return true # Not indented
  else
  return false # Not indented
  end
end

dif max a b # Typo dif -> def; no brackets around multiple arguments
  if a > b
      return a # Indented too far
  else
  b # Not indented; should be consistent with return keyword
  end
end
end # Extra end keyword

def looper
  for i in 1..10 # No do keyword
  puts i # Not indented
end # Function doesn't explicitly return anything
end

failures = 0

if looper == 10 # Conditional doesn't make sense, should check for not nil
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
# No end statement

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed" # Wrong function named here
  failrues = failures + 1 # Typo failrues -> failures
end


if failures # Needs to check if greater than zero
  puts "Test Failed"
else
  puts "Test Passed"
end
