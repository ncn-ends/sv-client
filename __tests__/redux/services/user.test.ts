import fetchMock from "jest-fetch-mock";
import { userService } from "../../../src/common/redux/services/userService";
import store from '../../../src/common/redux/store'
import { ProfileData } from "../../../src/common/types/UserProfile";

beforeEach( (): void => {
    fetchMock.resetMocks();
} );

describe( "userService tests", () => {
    test( "getByUserId successful response", async () => {
        const USER_ID = "od914771371647725619"

        const { status, data, isSuccess } = await store
            .dispatch(
                userService.endpoints.getUserById.initiate( USER_ID )
            );

        expect( status ).toBe( "fulfilled" );
        expect( isSuccess ).toBe( true );
        expect( data.userProfileId ).toStrictEqual( USER_ID );
    } );
} );

// describe("CreateGame", () => {
//     test("request is correct", () => {
//         const storeRef = setupApiStore(diplomacyService, { auth: authReducer });
//         const testToken = "test-123";
//         storeRef.store.dispatch(authActions.login(testToken));
//         fetchMock.mockResponse(JSON.stringify({}));
//         return storeRef.store
//             .dispatch<any>(diplomacyService.endpoints.createGame.initiate(newGame))
//             .then(() => {
//                 expect(fetchMock).toBeCalledTimes(1);
//                 const request = fetchMock.mock.calls[0][0] as Request;
//                 const { method, headers, url } = request;
//
//                 void request.json().then((data) => {
//                     expect(data).toStrictEqual(newGame);
//                 });
//
//                 const accept = headers.get(Headers.Accept);
//                 const authorization = headers.get(Headers.Authorization);
//
//                 expect(method).toBe("POST");
//                 expect(url).toBe(`${serviceURL}Game`);
//                 expect(accept).toBe("application/json");
//                 expect(authorization).toBe(`Bearer ${testToken}`);
//             });
//     });
//     test("successful response", () => {
//         const storeRef = setupApiStore(diplomacyService, { auth: authReducer });
//         const testToken = "test-123";
//         storeRef.store.dispatch(authActions.login(testToken));
//         fetchMock.mockResponse(JSON.stringify(game));
//
//         return storeRef.store
//             .dispatch<any>(diplomacyService.endpoints.createGame.initiate(newGame))
//             .then((action: any) => {
//                 const { data } = action;
//                 expect(data).toStrictEqual(game);
//             });
//     });
//     test("unsuccessful response", () => {
//         const storeRef = setupApiStore(diplomacyService, { auth: authReducer });
//         fetchMock.mockReject(new Error("Internal Server Error"));
//
//         return storeRef.store
//             .dispatch<any>(
//                 diplomacyService.endpoints.listVariants.initiate(undefined)
//             )
//             .then((action: any) => {
//                 const {
//                     status,
//                     error: { error },
//                     isError,
//                 } = action;
//                 expect(status).toBe("rejected");
//                 expect(isError).toBe(true);
//                 expect(error).toBe("Error: Internal Server Error");
//             });
//     });
// });