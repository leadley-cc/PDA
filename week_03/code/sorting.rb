def sort_arrays_by_length(arrays)
  arrays.sort_by { |array| array.length }
end

jumbled_message = [
  ["that", "needs", "sorting", "into"],
  ["this", "is"],
  ["the", "right", "order", "for", "reading"],
  ["hello"],
  ["a", "long", "message"]
]

puts sort_arrays_by_length(jumbled_message)
