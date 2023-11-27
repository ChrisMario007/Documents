let columnCount = 1; // Track the number of columns
let tables = []; // Store table details

function toggleColumnForm() {
    const columnForm = document.getElementById('columnForm');
    columnForm.style.display = 'block';
}

function addColumn() {
    const columnDetails = document.getElementById('columnDetails');
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Column Name';
    inputField.name = `column${columnCount}`;
    columnDetails.appendChild(inputField);

    // Increment the column count
    columnCount++;
}

function addPrimaryKey() {
    // Implement logic to handle Primary Key
    // You can add your specific functionality here
}

function addForeignKey() {
    // Implement logic to handle Foreign Key
    // You can add your specific functionality here
}

function addUnique() {
    // Implement logic to handle Unique Key
    // You can add your specific functionality here
}

function addNotNull() {
    // Implement logic to handle Not Null
    // You can add your specific functionality here
}

function generateQuery() {
    const tableName = document.getElementById('tableName').value.trim();
    const columnDetails = document.getElementById('columnDetails');

    const columns = Array.from(columnDetails.querySelectorAll('input')).map(input => input.value);

    // Store table details
    tables.push({ name: tableName, columns: columns });

    // Display the generated query
    const generatedQuery = document.getElementById('generatedQuery');
    generatedQuery.textContent = `Generated SQL Query:\n${generateSQLQuery(tables)}`;

    // Display the table name in the .database-details div
    displayTableName(tableName);
}

function displayTableName(tableName) {
    const databaseDetailsDiv = document.querySelector('.database-details div');
    const tableNameElement = document.createElement('div');
    tableNameElement.textContent = tableName;
    databaseDetailsDiv.appendChild(tableNameElement);
}

function generateSQLQuery(tables) {
    // Implement the logic to generate SQL Query based on table details
    // You can customize this function based on your requirements
    let query = '';
    tables.forEach(table => {
        query += `CREATE TABLE ${table.name} (\n`;
        table.columns.forEach((column, index) => {
            query += `  ${column}`;
            if (index < table.columns.length - 1) {
                query += ',\n';
            } else {
                query += '\n';
            }
        });
        query += ');\n\n';
    });
    return query;
}

// Continue with other functions as needed
