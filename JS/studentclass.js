class Student {
    setDetails(name, roll, marks) {
        this.name = name;
        this.roll = roll;
        this.marks = marks;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Roll No:", this.roll);
        console.log("Marks:", this.marks);
    }
}

let s1 = new Student();
s1.setDetails("Rohit", 102, 30);

s1.display();
