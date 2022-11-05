const login1=document.getElementById("loginpage");
const reg=document.getElementById("regpage");
const note=document.getElementById("notepage");
//console.log(login1)
if(login1) login1.addEventListener('submit',funlogin)
if(reg) reg.addEventListener('submit',register)
if(note) note.addEventListener('submit',funnote)

function register(e)
{
    e.preventDefault();
    let firstname=document.getElementById("firstname").value;
    let lastname=document.getElementById("lastname").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    
    

    class User{
        constructor(firstname,lastname,email,password)
        {   
            this.firstname=firstname; 
            this.lastname=lastname;
            this.email=email;
            this.password=password;
           
        }
        getemail(){
            return this.email;
        }
        setemail(newemail){
            this.email = newemail;
        }
        getpassword(){
            return this.password;
        }
        setpassword(newpassword){
            this.password=newpassword
        }
        getfirstname(){
            return this.firstname;
        }
        setfirstname(newfirstname){
            this.firstname = newfirstname;
        }
        getlastname(){
            return this.lastname;
        }
        setlastname(newlastname){
            this.lastname=newlastname;
        }
    }
    
    //let fname=document.getElementById('fname').value;
    const user1=new User(firstname,lastname,email,password);
    console.log(user1);
}

function funlogin(e)
{
    e.preventDefault()
    
    let email=document.getElementById('user').value;
    let password=document.getElementById('passwd').value;
    
    class User{
        constructor(email,password)
        {
            
            this.email=email;
            this.password=password;
        }
        getemail(){
            return this.email;
        }
        setemail(newemail){
            this.email = newemail;
        }
        getpassword(){
            return this.password;
        }
        setpassword(newpassword){
            this.password=newpassword
        }
    }
    
    const user1=new User(email,password);
    console.log(user1);
}

function funnote(e)
{
    e.preventDefault()
    
    let note=document.getElementById('note').value;
    
    
    class User{
        constructor(note)
        {
            
            this.note=note;
            
        }
        getnote(){
            return this.note;
        }
        setnote(newnote){
            this.note = newnote;
        }
    }
        
    
    const user1=new User(note);
    console.log(user1);
}
