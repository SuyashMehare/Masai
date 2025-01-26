function processStudents(studs = []) {
    let names = studs
        .filter(val => val.marks > 60)
        .sort((a,b) => b.marks - a.marks)
        .map(val => val.name)
    return names;
}