import Input from "@/shared/components/atoms/Input";
import {useState} from "react";

const Search = ({className = ""}) => {
    const [search, setSearch] = useState("")
    return (
        <>
            <Input
                value={search}
                placeholder="Buscar"
                onChange={(value) => {
                   setSearch(value)
                }}
                className={className}
            />
        </>
    )
}

export default Search;