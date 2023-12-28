import { Route, Routes, useLocation } from "react-router-dom";
import AddBook from "./pages/AddItem/AddBook/AddBook";
import AddJournal from "./pages/AddItem/AddJournal/AddJournal";
import AddThesis from "./pages/AddItem/AddThesis/AddThesis";
import AddAdmin from "./pages/Members/AddAdmin";
import AddUser from "./pages/Members/AddUser";
import AdminList from "./pages/Members/AdminList";
import AdminProfile from "./pages/Members/AdminProfile";
import UpdateAdminProfile from "./pages/Members/UpdateAdminProfile";
import UpdateUserProfile from "./pages/Members/UpdateUserProfile";
import UserList from "./pages/Members/UserList";
import UserProfile from "./pages/Members/userProfile";
import Header from "./pages/Shared/Header";
import ViewBooks from "./pages/ViewItems/ViewBooks/ViewBooks";
import ViewThesis from "./pages/ViewItems/ViewTheses/ViewThesis";
import ThesisDetails from "./pages/ViewItems/ViewTheses/ThesisDetails";
import BookDetails from "./pages/ViewItems/ViewBooks/BookDetails";
import UpdateBook from "./pages/AddItem/AddBook/UpdateBook";
import IssueBook from "./pages/Issue/IssueBook";
import AdminData from './pages/Members/AdminData';
import IssueRequest from "./pages/Issue/IssueRequest";
import SingleRequestDetails from "./pages/Issue/SingleRequestDetails";
import Dashboard from "./pages/Dashboard/Dashboard";
import ExtendReturnDate from "./pages/Dashboard/ExtendReturnDate";
import RegAUser from "./pages/Members/RegAUser";
import NoticeBoard from "./pages/Dashboard/NoticeBoard";
import Login from "./pages/Login/Login";

// import AddBook1 from './pages/AddItem/AddBook/AddBook1';
// import Imageupload from './pages/AddItem/AddBook/Imageupload';

// wrapper
import ProtectedWrapper from "./protecetd-wrapper/protected-wrapper";

// const ProtectedDashboard = ProtectedWrapper(Dashboard);
// const ProtectedAddBook = ProtectedWrapper(AddBook);
// const ProtectedAddThesis = ProtectedWrapper(AddThesis);
// const ProtectedViewBooks = ProtectedWrapper(ViewBooks);
// const ProtectedBookDetails = ProtectedWrapper(BookDetails);
// const ProtectedUpdateBook = ProtectedWrapper(UpdateBook);
// const ProtectedViewThesis = ProtectedWrapper(ViewThesis);
// const ProtectedThesisDetails = ProtectedWrapper(ThesisDetails);
// const ProtectedRegAUser = ProtectedWrapper(RegAUser);
// const ProtectedAddAdmin = ProtectedWrapper(AddAdmin);
// const ProtectedAdminList = ProtectedWrapper(AdminList);
// const ProtectedAdminProfile = ProtectedWrapper(AdminProfile);
// const ProtectedAdminData = ProtectedWrapper(AdminData);
// const ProtectedUserList = ProtectedWrapper(UserList);
// const ProtectedUserProfile = ProtectedWrapper(UserProfile);
// const ProtectedUpdateUserProfile = ProtectedWrapper(UpdateUserProfile);
// const ProtectedNoticeBoard = ProtectedWrapper(NoticeBoard);
// const ProtectedUpdateAdminProfile = ProtectedWrapper(UpdateAdminProfile);
// const ProtectedIssueBook = ProtectedWrapper(IssueBook);
// const ProtectedIssueRequest = ProtectedWrapper(IssueRequest);
// const ProtectedSingleRequestDetails = ProtectedWrapper(SingleRequestDetails);
// const ProtectedExtendReturnDate = ProtectedWrapper(ExtendReturnDate);

function App() {
  const location = useLocation();
  const withoutNavbarLocation = '/login';

  return (
    <div className="bg-light" >
      {
        withoutNavbarLocation !== location.pathname && <Header />
      }
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        {/* <Route path="/" element={<Dashboard/>}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        {/*  */}
        <Route path="/addBook" element={<AddBook />}></Route>
        <Route path="/viewBooks" element={<ViewBooks />}></Route>
        <Route path="/viewBooks/:id" element={<BookDetails />}></Route>
        <Route path="/updateBook/:id" element={<UpdateBook />}></Route>
        
        {/*  */}
        <Route path="/addThesis" element={<AddThesis />}></Route>
        <Route path="/viewTheses" element={<ViewThesis />}></Route>
        <Route path="/viewTheses/:id" element={<ThesisDetails />}></Route>


        <Route path="/addNewUser" element={<RegAUser />}></Route>
        <Route path="/addNewAdmin" element={<AddAdmin />}></Route>
        <Route path="/adminList" element={<AdminList />}></Route>
        <Route path="/adminList/:id" element={<AdminProfile />}></Route>
        <Route path="/updateAdminProfile/:id" element={<AdminData />}></Route>
        <Route path="/userList" element={<UserList />}></Route>
        <Route path="/userList/:id" element={<UserProfile />}></Route>
        <Route path="/updateUserProfile/:id" element={<UpdateUserProfile />}></Route>
        <Route path="/updateNotice/:id" element={<NoticeBoard />}></Route>
        <Route path="/updateAdminProfile/:id" element={<UpdateAdminProfile />}></Route>

        <Route path="/issueBook/:id" element={<IssueBook />}></Route>

        <Route path="/issueBook" element={<IssueBook />}></Route>
        <Route path="/issueRequest" element={<IssueRequest />}></Route>
        <Route path="/userIssueRequestForABook/:id" element={<SingleRequestDetails />}></Route>

        <Route path="/extendReturnDate/:id" element={<ExtendReturnDate />}></Route>

      </Routes>
    </div>
  );
}

export default App;
