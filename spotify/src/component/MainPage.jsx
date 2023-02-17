import { Container, Row, Col, Dropdown, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Song from "./Songs";
import { searchSongsActionAsync } from "../redux/actions";

const MainPageComponent = () => {
  const [query, setQuery] = useState("");
  const songsFromTheReduxStore = useSelector(
    (state) => state.search.searchResult
  );
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(searchSongsActionAsync(query));
  };

  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Container fluid>
            <div className="d-block side-bar">
              <img
                className="logo"
                src="/spotify/public/assets/Spotify_Logo.png"
                alt="logo"
              />
              <div>Home</div>
              <div>Search</div>
              <div>Your Library</div>
              <div>Create Playlist</div>
              <div>Liked Songs</div>
              <hr></hr>
              <div>Sam's Playlist</div>
            </div>
          </Container>
        </Col>
        <Col>
          <Container fluid>
            <Row>
              <Col className="d-flex">
                <div> left arrow</div>
                <div> right arrow</div>
                <Form onSubmit={handleSubmit}>
                  <Form.Control
                    type="search"
                    value={query}
                    onChange={handleChange}
                    placeholder="type and press Enter"
                  />
                </Form>
              </Col>
              <Col className="d-flex">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    User
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Account</Dropdown.Item>
                    <Dropdown.Item href="#">Profile</Dropdown.Item>
                    <Dropdown.Item href="#">Sign Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <Row>
              {songsFromTheReduxStore ? (
                songsFromTheReduxStore.map((song) => <Song data={song} />)
              ) : (
                <h1>Loading...</h1>
              )}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPageComponent;
