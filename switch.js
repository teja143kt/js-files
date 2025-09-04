let score = 101;
switch (true) {
    case (score < 0 || score > 100):
        console.log("invalid score");
        break;
    case (score >= 90):
        console.log("a");
        break;
    case (score >= 80):
        console.log("b");
        break;
    case (score >= 70):
        console.log("C");
        break;
    case (score >= 60):
        console.log("D");
        break;
    case (score < 60):
        console.log("F");
        break;
    default:
        console.log("Invalid score.");
}