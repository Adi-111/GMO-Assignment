//interface
interface UserForm {
    name: string;
    phoneNumber: string;
    email: string;
}
export interface Department {
    department: string;
    sub_departments: string[];
}
//const
export const departments: Department[] = [
    {
      department: "Management",
      sub_departments: ["HR", "Finance", "Marketing"]
    },
    {
      department: "Engineering",
      sub_departments: ["Development", "QA", "DevOps"]
    },
    {
      department: "Operations",
      sub_departments: ["IT Support", "Customer Service", "Logistics"]
    }
];


  



//exports
export default UserForm;

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
  
export interface Department {
    department: string;
    sub_departments: string[];
}