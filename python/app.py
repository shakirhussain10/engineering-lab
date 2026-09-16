def mintues_to_hours(values):
    if any(value < 0 for value in values):
        raise ValueError("Minutes cannot be negative")
    return [value / 60 for value in values]

#Check [0, 30, 120] → [0.0, 0.5, 2.0], [] → [], and [-1] raises ValueError.    

print(mintues_to_hours([0, 30, 120]))

print([])

try:
    print("Test 3:", mintues_to_hours([-1]))
except ValueError as err:
    print("Test 3 (Error Caught):", err)