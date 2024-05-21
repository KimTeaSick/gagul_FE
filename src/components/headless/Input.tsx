import { ChangeEvent, createContext, useContext } from "react"
import { TextInput } from "react-native"

type InputContextType = {
  placeholder: string
  inputValue: string
  initialValue: string
  type: 'text' | 'number' | 'password'
  onChange: (text: string) => void
}

type InputType = InputContextType & React.PropsWithChildren<{}>

const InputContext = createContext({ placeholder: '', initialValue: '', inputValue: '', type: 'text', onChange: (text: string) => { }, })

const useInputContext = () => {
  const context = useContext(InputContext)
  return context
}

const Input = ({ placeholder, initialValue, inputValue, type, onChange, children }: InputType) => {
  const value = { placeholder, initialValue, inputValue, type, onChange }
  return (
    < InputContext.Provider value={value}>
      {children}
    </InputContext.Provider>
  )
}

const InputBody = () => {
  const { inputValue, placeholder, onChange } = useInputContext()
  return (
    <TextInput
      value={inputValue}
      placeholder={placeholder}
      onChangeText={(text: string) => { onChange(text) }}
    />
  )
}

Input.Body = InputBody

export default Input
