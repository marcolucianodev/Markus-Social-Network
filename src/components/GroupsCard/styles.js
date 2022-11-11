import styled from "styled-components";

export const Container = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;

  .group-cover-image {
    height: 15rem;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      object-fit: cover;
    }
  }

  .group-profile-image {
    width: 10rem;
    height: 10rem;
    margin-top: -4rem;

    img {
      width: 9.2rem;
      height: 9.2rem;
      border-radius: 100%;
      border: 4px solid #FFFFFF;
    }
  }

  .group-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;

    .info-group-name {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.4rem;
      width: 100%;

          a {
              display: flex;
          }

          span.group-name {
              margin-right: 0.5rem;
              font-weight: 700;
              color: #515365;
              transition: 0.5s;

              &:hover {
                  color: #ff5e3a;
              }
          }
      }

      .info-group-specification {
          margin-bottom: 2rem;
          margin-top: 0.5rem;
          width: 100%;
          text-align: center;
          font-size: 1.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.3rem;

          span .group-specification-icon {
            font-size: 2.5rem;
          }

          .lock-group-icon {
            font-size: 1.4rem;
          }
      }
  }

  .group-statistics {
    display: flex;
    padding: 1rem 1rem 4rem;

    ul.list-group-statistics {
      list-style: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1.5rem;

      li {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 4rem;
          height: 4rem;
      }

      .statistics-group-post-icon,
      .statistics-group-activity-icon,
      .statistics-group-members-icon {
          font-size: 3rem;
          box-sizing: content-box;
          padding: 0.5rem;
          border-radius: 0.3rem;
          color: #FFFFFF;
      }

      .statistics-group-post-icon {
          background-color: #ff5e3a;
      }

      .statistics-group-activity-icon {
          background-color: #38a9ff;
      }

      .statistics-group-members-icon {
          background-color: #7c5ac2;
      }
    }
  }

`