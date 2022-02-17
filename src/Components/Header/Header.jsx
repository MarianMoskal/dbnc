import { NavLink } from 'react-router-dom'
import { DATA } from '../../helpers/constants'
import css from './Header.module.css'

const activeStyle = { color: 'red' }

export default function Header() {
  return (
    <div>
      <nav>
        <ul className={css.list}>
          {DATA.map(({ to, children }) => 
            <li key={children}>
              <NavLink
                to={to}
                style={({ isActive }) =>
                  isActive ? activeStyle : null
                }
              >
                {children}
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
};
