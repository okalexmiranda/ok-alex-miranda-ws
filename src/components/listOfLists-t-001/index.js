import React from "react"
import listOfListT001Styles from "./style.module.scss"
import { stack } from "../../data-simulation/simulation"

const ListOfListT001 = () => {
  return (
    <section id="listOfList-t-001">
      <section className={`${listOfListT001Styles.container}`}>
        <ul className={`${listOfListT001Styles.listOfLists}`}>
        <h5 className={`${listOfListT001Styles.title}`}>
                Stack_
              </h5>
          {stack.map(title => (
            <li className={`${listOfListT001Styles.listItem}`}>
              <h5 className={`${listOfListT001Styles.subtitle}`}>
                {title.listName}
              </h5>
              <ul className={`${listOfListT001Styles.list}`}>
                {title.listItem.map(item => (
                  <li className={`${listOfListT001Styles.item}`}>
                    <h5 className={`${listOfListT001Styles.text}`}>{item}</h5>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default ListOfListT001
