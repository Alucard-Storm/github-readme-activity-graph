const fs = require('fs');
const path = require('path');

describe('Generate activity graph workflow', () => {
    it('uses the repository owner login when generating the SVG', () => {
        const workflow = fs.readFileSync(
            path.join(__dirname, '..', '.github', 'workflows', 'generate-activity-graph.yml'),
            'utf8',
        );

        expect(workflow).toContain('USERNAME: ${{ github.repository_owner }}');
        expect(workflow).toContain('username=${USERNAME}');
        expect(workflow).not.toContain('username=alucard_storm');
    });
});
