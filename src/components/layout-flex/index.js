import React from 'react';
import {cn as bem} from "@bem-react/classname";
import propTypes from "prop-types";
import './style.css';

function LayoutFlex({children, flex}){
  const cn = bem('LayoutFlex');

  return (
    <div className={cn({flex})}>
      {React.Children.map(children, (child) => (
        <div key={child.key} className={cn('item')}>{child}</div>
      ))}
    </div>
  )
}

LayoutFlex.propTypes = {
  children: propTypes.node,
  flex: propTypes.oneOf(['start', 'end', 'between'])
}

LayoutFlex.defaultProps = {
  flex: 'start'
}

export default React.memo(LayoutFlex);
