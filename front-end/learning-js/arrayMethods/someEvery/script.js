const exams = [90, 80, 83, 85, 92, 81];

// EVERY

exams.every((score) => score >= 75); // will return true because every score in exams is >= 75

exams.every((score) => score >= 90); // will return false - only two scores meet this requirement

// SOME

exams.some((score) => score >= 75); // will return true - some els in exams are >= 75 (in fact, they all are)

exams.some((score) => score >= 96); // will return false - no el in exams is >= 96
