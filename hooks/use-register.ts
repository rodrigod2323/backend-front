import { ChangeEvent, useState, FormEvent } from "react";
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function useRegister() {

    const router = useRouter();

    const [register, { isLoading }] = useRegisterMutation();

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: '',
    });

    const { first_name, last_name, email, password, re_password } = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value })
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        register({ first_name, last_name, email, password, re_password })
            .unwrap()
            .then(() => {
                router.push('/auth/login');
                toast.success('Success! Please check your email to validate account')
            })
            .catch(() => {
                toast.error('Error on creating account')
            })

    }

    return {
        first_name, 
        last_name, 
        email, 
        password, 
        re_password,
        isLoading,
        onChange,
        onSubmit
    }

}