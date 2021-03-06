import Icon from '@components/atoms/icon/Icon'
import styled from 'styled-components'

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    border: none;
    padding: 5px 0px;
    outline: none;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    transform: ${(props) => (props.search ? 'rotate(45deg)' : '')};
  }
`

export default function FriendSearch({ setSearch, search, handler }) {
  const onSearch = (event) => {
    event.preventDefault()
    setSearch(!search)
  }
  return (
    <Component search={search}>
      {search ? (
        <input
          onChange={handler}
          type={'text'}
          placeholder="Seach friend's name"
        />
      ) : (
        <h3>Friends</h3>
      )}
      <button onClick={onSearch}>
        <Icon icon={search ? 'add' : 'search'} />
      </button>
    </Component>
  )
}
