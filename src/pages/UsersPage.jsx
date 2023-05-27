import React, { useContext } from "react";
import UserModalForm from "../components/UserModalForm";
import UsersList from "../components/UsersList";
import { UserContext } from "../Context/userContext";

const UsersPage = () => {
  const {
    users,
    visible,
    handlerOpenForm,
    setMostrar
  } = useContext(UserContext);

  //el user es el objeto que viene del formulario de usuario y lo recibe
  //el handlerAddUser que lo pasa al dispatch que lo pasa al reducer que lo agrega al estado de users

  return (
    <>
      {visible ? <UserModalForm /> : null}

      <div className="container my-4 ">
        <div className="row">
          <div className="col">
            {!visible ? (
              <button
                className="btn btn-primary mb-3"
                onClick={()=>{handlerOpenForm();setMostrar(true)}}
              >
                Add User
              </button>
            ) : null}

            {users.length ? (
              <UsersList />
            ) : (
              <div className="alert alert-warning">
                Don't have users to show!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default UsersPage;
