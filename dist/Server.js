"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const { app } = App_1.default;
const PORT = process.env.PORT || 9503;
app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`);
});
//# sourceMappingURL=Server.js.map