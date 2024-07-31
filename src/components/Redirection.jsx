import { Container, Heading } from "@chakra-ui/react"
import { useState } from "react";

function Redirection(){
   let [count,setCount]=useState(5)
   let timer
    function Counting(){
        timer=setInterval(() => {
            setCount(count-1)
        }, 1000);
        if(count==0){
          clearInterval(timer)
        }
         return <Heading as="h1" color="red" size="xl">{count}</Heading>  
    }
    return <>
     <Container textAlign="center" p="10">
     <Counting/>
     <Heading size="md">You are going to be redirected on template section</Heading>
     </Container>
    </>
}
export default Redirection