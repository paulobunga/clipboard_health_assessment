# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### TICKET #1: ADD INTERNAL AGENT ID FIELD TO AGENT TABLE AND UPDATE API ENDPOINTS (Estimate: 30 minutes)

Update Agent table to include custom id for the facilities to store their own custom ids.

### Acceptance Criteria
- internal_agent_id field added to the agent table in the database.
- API endpoints for creating and updating agents should include internal_agent_id in the request payload.
- API response for fetching a single agent should include internal_agent_id if it exists.
- API response for fetching multiple agents should include internal_agent_id for each record if it exists.
- Data access methods for fetching or updating agents should include internal_agent_id.

### Implementation Steps
- Add a new field called internal_agent_id to the agent table in the database schema.
- Modify the API endpoints for creating and updating agents to include internal_agent_id in the request payload.
- Modify the API response for fetching a single agent to include internal_agent_id if it exists.
- Modify the API response for fetching multiple agents to include internal_agent_id for each record if it exists.
- Update the data accessing functions to include internal_agent_id when fetching or updating the records.


### TICKET #2: ADD INTERNAL AGENT ID FIELD TO SHIFT TABLE (Estimate: 45 minutes)

Update Shift table to include custom id for the facilities to store their own custom ids.

### Acceptance Criteria
- internal_agent_id field added to the shift table in the database.
- The methods for inserting or updating shifts should include internal_agent_id.

### Implementation Steps
- Add a new field called internal_agent_id to the shift table in the database schema.
- Modify the methods (e.g createNewShift, updateShift) to include internal_agent_id when inserting or updating shifts.



### TICKET #3: UPDATE GETSHIFTSBYFACILITY FUNCTION (Estimate: 1 hour)

Update the getShiftByFacility to include the custom id in the returned shift 

### Acceptance Criteria

- getShiftsByFacility function should include internal_agent_id field in the returned shifts.
- Any dependent functions or methods should handle the new field if needed.

### Implementation Steps
- Modify the getShiftsByFacility function to include the internal_agent_id field in the returned shifts.
- Update any dependent functions or methods to handle the new field if needed.


### TICKET #4: UPDATE GENERATEREPORT FUNCTION TO USE INTERNAL AGENT ID (Estimate: 1 hour)

Update the getShiftByFacility to include the custom id in the returned shift 

### Acceptance Criteria
- generateReport function should use internal_agent_id field in the report.
- The function should be tested with various scenarios to ensure the new field is used correctly.

### Implementation Steps
- Modify the generateReport function to use the internal_agent_id field instead of the internal database id in the report.
- Test the function with various scenarios to ensure the new field is used correctly.
