animal = {
  name: "Simon",
  type: "Snake",
  species: "Python bivittatus",
  location: "Austria-Hungary"
}

def animal_type(animal)
  return animal[:type]
end

puts animal_type(animal)
