<template>
  <div>
    <h1>Vue示例</h1>
    <ul>
      <li><router-link to="/example01">welcome</router-link></li>
      <li>
        <router-link to="/example02">
          data & computed & methods & watch
        </router-link>
      </li>
      <li>
        route with params
        <ul>
          <li>
            <router-link to="/example03/students/12/homeworks/1">
              sid:12; hid:1
            </router-link>
          </li>
          <li>
            <router-link to="/example03/students/74/homeworks/2">
              sid:74; hid:2
            </router-link>
          </li>
        </ul>
      </li>
      <li><router-link to="/example03-02">keep-alive</router-link></li>
      <li>
        Composition-API
        <ul>
          <li>
            <router-link to="/example04-01">
              interface & ref() & computed() & watch()
            </router-link>
          </li>
          <li><router-link to="/example04-04">Composition</router-link></li>
          <li><router-link to="/example04-02">reactive()</router-link></li>
          <li>
            <router-link to="/example04-03/students/45/homeworks/23">
              students/45/homeworks/23
            </router-link>
          </li>
          <li>
            <router-link to="/example04-03/students/18/homeworks/18">
              students/18/homeworks/18
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <ul>
          <li>
            <router-link to="/example07-01">
              state
            </router-link>
          </li>
          <li>
            <router-link to="/example07-02">
              Mutations
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
