import { useProvider } from '../context'

import Select from 'react-select'
import '../styles/components/_select.scss'

const CustomSelect = () => {
  const { currentSelect, setCurrentSelect } = useProvider()

  const options = [
    { value: 'reactjs', label: 'React Js' },
    { value: 'angular', label: 'Angular' },
    { value: 'vuejs', label: 'Vue Js' }
  ]

  // change select
  const handleSelect = (ev) => {
    setCurrentSelect(ev)
    window.localStorage.hackerNewsCurrentSelect = JSON.stringify(ev)
  }

  return (
    <div className='container'>
      <Select
        classNamePrefix='custom-select'
        className='custom-select-container'
        placeholder='Select your news'
        value={currentSelect}
        onChange={handleSelect}
        options={options}
        isSearchable={false}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#1797ff',
            primary25: '#eaeaea'
          }
        })}
      />
    </div>
  )
}

export default CustomSelect
