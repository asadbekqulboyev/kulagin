print("Welcome to Kundalik")
panel = int(input("What do you want to do: \n 1)Add new student name and score: \n 2)Update score: \n 3)Delete student: \n 4)Show class average, highest, lowes: \n 5)Search student by name: \n 6)Concepts used: dictionaries, loops, functions, inpu/output:"))

with open("students_data.txt", "a") as file:
    print(file.read("students_data.txt"))
if panel == 1:
    student_name = input("Enter student name: ")
    student_score = float(input("Enter student score: "))
    with open("students_data.txt", "a") as file:
        file.write(f"{student_name},{student_score}\n")
        
    print("Student added successfully.")
