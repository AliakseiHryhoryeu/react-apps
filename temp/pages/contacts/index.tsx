
import { FC } from "react";
import {GetStaticProps} from "next"
import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";
import { contactType } from "../../types";

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

if(!data){
  return{
    notFound:true
  }
}
  return {
    props: { contacts: data }
  }
}

type contactsTypeProps={
  contacts:[contactType]
}

const Contacts:FC<contactsTypeProps> = ({contacts}) => {

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="All contacts" />
      <ul>
        {contacts && contacts.map(({ id, name }) => (
          <li key={id}>
            <Link href={`contacts/${id}`} >{name}</Link>
          </li>
        ))}
      </ul>

    </>
  )
}

export default Contacts;
