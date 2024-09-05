import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

function SignIn() {
  const navigate = useNavigate()
  const HandleSignup = ()=>{navigate("/Auth/signup")};
  return (
    <div className="flex justify-center items-center py-24 sm:px-3">
      <Card className="w-96">
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
          <div className="flex items-center gap-2 mt-4">
        <Label htmlFor="notRegister">Not Registered?</Label>
        <a  onClick={HandleSignup} id="notRegister"  className="text-blue-500 underline cursor-pointer">
          Sign Up
        </a>
      </div>

        </form>
      </Card>

    </div>
  );
}

export default SignIn;
