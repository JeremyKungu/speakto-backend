import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { Session } from "./entity/Session";

AppDataSource.initialize()
  .then(async () => {
    //create a session
    const sessionRepository = AppDataSource.getRepository(Session);
    // const session = new Session();
    // session.title = "Switching careers to tech";
    // session.timeOnly = "09:30:00";
    // session.dateOnly = "2023-01-03";
    // session.durationMinutes = 30;
    // session.price = 50.0;    

    // await sessionRepository.save(session);
    // console.log("Session has been saved");

    //list all sessions
    const savedSession = await sessionRepository.find();
    console.log("All sessions from the db: ", savedSession);

    // //get one session for a user
    // const firstSession = await sessionRepository.findOneBy({
    //   id: 1,
    // });
    // console.log("First session from the db: ", firstSession);

    //updating the session for a user
    // const sessionToUpdate = await sessionRepository.findOneBy({
    //   id: 4,
    // });
    // sessionToUpdate.title = "Building your first MVP";
    // sessionToUpdate.durationMinutes = 40;
    // sessionToUpdate.price = 30.0;
    // await sessionRepository.save(sessionToUpdate);

    //delete a session
    // const sessionToRemove = await sessionRepository.findOneBy({
    //   id: 7,
    // });
    // await sessionRepository.remove(sessionToRemove);
  })
  .catch((error) => console.log(error));
