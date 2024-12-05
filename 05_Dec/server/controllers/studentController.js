const stuHome=async(req, res)=>{
    res.send("Student Home Page");
}
const stuAbout=async(req, res)=>{
    res.send("About Page!!!");
}
const stuContact=async(req, res)=>{
    res.send("Contact Page!!!");
}
const stuService=async(req, res)=>{
    res.send("Service Page!!!");
}
export default stuHome;
export {stuAbout, stuContact, stuService};