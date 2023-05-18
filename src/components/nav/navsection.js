import './nav.css'

import { Link } from 'react-router-dom'

export default function NavSection({ title, itemList }) {
  return (
    <div className="section">
      <p className="title"> {title} </p>

      <div className="list">
        {itemList.map((item, i) => (
          <NavItem
            title={item.title}
            link={item.link}
            callback={item.callback}
          />
        ))}
      </div>
    </div>
  );
}

function NavItem({ title, link, callback }) {
  return (
    <div className="item" onClick={callback}>
      <div className="item-icon"></div>
      <p className="item-title"> {title} </p>

      <Link to={link}></Link>
    </div>
  );
}