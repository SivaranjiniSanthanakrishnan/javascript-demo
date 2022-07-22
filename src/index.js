
import PersonClass from './person';
import Teacher from './teacher';

const personObj = new PersonClass('XXX');
personObj.walk();

const teacherObj = new Teacher('YYY', 'Maths', 'Physics');
teacherObj.teach();
teacherObj.walk();