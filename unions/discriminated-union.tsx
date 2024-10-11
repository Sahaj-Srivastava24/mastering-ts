// @ts-expect-error
import React from "react"

type ModalVariants = {
  type: "title",
  title: string
} | {
  type: "no-title"
}

type ModalProps = ModalVariants &  {
  buttonColor:string
}

function Modal(props: ModalProps) {
  if (props.type === "title") {
    return <h1>Titled modal - {props.title} {props.buttonColor}</h1>
  }

  return <h1>Modal without title - {props.buttonColor}</h1>
}

export default function Main() {
  return (
    <div>
      <Modal type="title" title="Hello" buttonColor="red" />
      <Modal type="no-title" buttonColor="red" />

      {/* @ts-expect-error - type "no-title" is not assignable to type "title". */}
      <Modal type="no-title" title="Hello" /> // 
    </div>
  )
}