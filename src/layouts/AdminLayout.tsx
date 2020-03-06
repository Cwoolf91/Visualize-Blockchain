import React from "react";
import { AdminNavbar } from "../components/AdminNavbar";
import { Route, Switch } from "react-router-dom";
import routes from "../routes";

interface AdminLayoutProps {
  sidebarOpened: any;
  backgroundColor: any;
}

export class AdminLayout extends React.Component<{}, AdminLayoutProps> {
  toggleSidebar: any;
  constructor(props: any) {
    super(props);
    this.state = {
      backgroundColor: "blue",
      sidebarOpened: false
    }
  }

  getRoutes = (routes: any[]) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div
          className="main-panel"
          ref="mainPanel"
        >
          <AdminNavbar {...this.props}
            brandText="testing"
            toggleSidebar={this.toggleSidebar}
            sidebarOpened={this.state.sidebarOpened}
          />
          <Switch>{this.getRoutes(routes)}</Switch>
        </div>
      </div>
    );
  }


}