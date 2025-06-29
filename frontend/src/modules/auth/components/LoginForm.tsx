import Button from "@/shared/components/atoms/Button";
import Input from "@/shared/components/atoms/Input";
import {useEffect, useState} from "react";
import {Text} from "@/shared/components/atoms/Text";
import useLogin from "../hooks/useLogin";

type InputValType = {
    value: string,
    error: string
}
const LoginForm = () => {
    const {loading, doLogin} = useLogin()
    const [username, setUserName] = useState<InputValType>({value: "", error: ""})
    const [password, setPassword] = useState<InputValType>({value: "", error: ""})

    const onClickSubmit = () => {
        if(username.error || password.error) {
            return;
        }
    }

    useEffect(() => {

    }, []);

    return (
        <div className="w-full h-full flex flex-col gap-8 justify-center items-center">
            <Input
                placeholder="Usuario"
                value={username.value}
                onChange={(value: string) => {
                    setUserName({...username, value})
                }}
                error={username.error}
                className="w-full"
            />
            <Input
                placeholder="Contraseña"
                value={password.value}
                onChange={(value: string) => {
                    setPassword({...password, value})
                }}
                error={password.error}
                className="w-full"
            />

            <div className="w-full flex flex-col gap-2">
                <Button size="large"
                        className="w-full"
                        disabled={loading}>
                    Entrar
                </Button>
                <Text as="span" size="sm" weight="bold" color="text-red-400"
                      className="underline w-full text-right cursor-pointer"
                      onClick={() => {
                          console.log({clikc: 1})
                      }}
                >
                    Registrarse
                </Text>
            </div>
        </div>
    )
}

export default LoginForm;